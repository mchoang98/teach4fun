import React, { useEffect, useState } from "react";
import "../styles/global.scss";

const PythonRunner: React.FC = () => {
    const [pyodide, setPyodide] = useState<any>(null);
    const [code, setCode] = useState<string>('print("Hello, Python!")');
    const [output, setOutput] = useState<string>("Đang tải Pyodide...");

    useEffect(() => {
        const loadPyodide = async () => {
            try {
                if (!(window as any).pyodide) {
                    const script = document.createElement("script");
                    script.src = "https://cdn.jsdelivr.net/pyodide/v0.27.3/full/pyodide.js";
                    script.onload = async () => {
                        const pyInstance = await (window as any).loadPyodide();
                        (window as any).pyodide = pyInstance; // Lưu vào global tránh load lại
                        setPyodide(pyInstance);
                        setOutput("Pyodide đã sẵn sàng!");
                    };
                    document.body.appendChild(script);
                } else {
                    setPyodide((window as any).pyodide);
                    setOutput("Pyodide đã sẵn sàng!");
                }
            } catch (error) {
                setOutput("Lỗi tải Pyodide! Kiểm tra kết nối mạng.");
            }
        };

        loadPyodide();
    }, []);

    const runCode = async () => {
        if (!pyodide) {
            setOutput("Pyodide chưa tải xong!");
            return;
        }

        try {
            // Chuyển hướng stdout để lấy output từ print()
            pyodide.runPython(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
            `);

            pyodide.runPython(code);

            // Lấy nội dung từ sys.stdout
            const result = pyodide.runPython("sys.stdout.getvalue()");

            setOutput(result || "Không có output.");
        } catch (error: any) {
            setOutput(`Lỗi: ${error.message}`);
        }
    };

    return (
        <div className="python-runner">
            <h2>Chạy Thử</h2>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows={5}
                cols={50}
            />
            <br />
            <button onClick={runCode} disabled={!pyodide}>
                {pyodide ? "Chạy Code" : "Đang tải..."}
            </button>
            <pre>{output}</pre>
        </div>
    );
};

export default PythonRunner;
