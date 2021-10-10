export default path => {
  const pathWithoutLeadingSlash = path.substring(1);
  let pathElements = pathWithoutLeadingSlash.split('/');
  pathElements = pathElements.reverse();
  pathElements = pathElements.map(element => element.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  pathElements = [...pathElements, 'Svelte UI Tailwind CSS'];
  return pathElements.join(' - ');
}