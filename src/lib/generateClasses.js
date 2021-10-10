import availableOptions from '$lib/availableOptions';
import deepmerge from 'deepmerge';

export default (options, tw, props) => {
  const defaultOptions = deepmerge({}, availableOptions)
  options = deepmerge(options, tw);
  return [
    ...Object.values(deepmerge(defaultOptions, options)),
    props.class !== undefined ? props.class.split(' ') : []
  ].filter(el => el !== '').join(' ');
}