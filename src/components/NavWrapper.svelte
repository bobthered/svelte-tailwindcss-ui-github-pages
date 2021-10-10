<script>
  // lib
  import generateClasses from 'svelte-tailwindcss-ui/lib/generateClasses';
  import theme from 'svelte-tailwindcss-ui/theme';
  
  // components
  
  // handlers
  
  // props ( internal )
  
  // props ( external )
  export let tw = {};
  
  // props ( dynamic )
  $: classes = generateClasses($theme.navWrapper, tw, $$props);
</script>

<div class={classes}><slot/></div>