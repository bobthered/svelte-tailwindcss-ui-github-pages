<script>
  // lib
  import generateClasses from 'svelte-tailwindcss-ui/lib/generateClasses';
  
  // components
  
  // handlers
  
  // props ( internal )
  const options = {
    fontSize: 'text-3xl',
    fontWeight: 'font-extrabold',
  };
  
  // props ( external )
  export let tw = {};
  
  // props ( dynamic )
  $: classes = generateClasses(options, tw, $$props);
</script>

<div class={classes}><slot/></div>