import OriginalComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import PythonCoursesNavbarItem from './PythonCoursesNavbarItem';

import type {ComponentTypesObject} from '@theme/NavbarItem/ComponentTypes';

const ComponentTypes = {
  ...OriginalComponentTypes,
  'custom-pythonCourses': PythonCoursesNavbarItem,
} as ComponentTypesObject & {
  readonly 'custom-pythonCourses': typeof PythonCoursesNavbarItem;
};

export default ComponentTypes;
