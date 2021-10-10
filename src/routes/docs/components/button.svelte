<script>
  // components
  import { Button, Container, FlexColumn } from 'svelte-tailwindcss-ui';
  import { RouteTitle } from '$components';
</script>

<div class="py-[1rem]">
  <FlexColumn tw={{alignItems:'items-start'}}>
    <RouteTitle>Button</RouteTitle>
    <Button href="./card" type="link">Login</Button>
  </FlexColumn>
</div>