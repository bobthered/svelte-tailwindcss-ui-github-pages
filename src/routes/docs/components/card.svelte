<script>
  // components
  import { Card, CardTitle, Container } from 'svelte-tailwindcss-ui';
</script>

<Container>
  <Card tw={{ maxWidth: 'max-w-md', space: 'space-y-[.5rem]' }}>
    <CardTitle>Card Title</CardTitle>
    <div>
      I am a very simple card. I am good at containing small bits of information. I am convenient
      because I require little markup to use effectively.
    </div>
  </Card>
</Container>
