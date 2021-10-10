<script>
  // lib
  import { page } from '$app/stores';
  import componentList from '$lib/componentList';
  import generatePageTitle from '$lib/generatePageTitle';
  import defaultTheme from '$theme';
  import { onMount } from 'svelte';
  import theme from 'svelte-tailwindcss-ui/theme';
  theme.update(defaultTheme);

  // components
  import { Button, Container, FlexColumn, FlexRow, Header, Icon, Icons, Nav, NavItem, NavMenuButton, NavOverlay, Spinner } from 'svelte-tailwindcss-ui';
  import { NavCategory, NavCategoryTitle, NavWrapper} from '$components'

  // css
  import "../app.css";

  // props ( internal )
  let loaded = false;
  let nav = {
    button: {
      tw: {
        borderRadius: 'rounded-full',
        display: 'flex',
        inset: 'bottom-[1rem] right-[1rem]',
        padding: 'p-[1rem]',
        position: 'fixed',
        zIndex: 'z-20'
      }
    },
    overlay: {
      tw: {
        opacity: 'opacity-0',
        pointerEvents: 'pointer-events-none',
      }
    },
    show : false,
    toggle: () => nav.show = !nav.show,
    tw: {
      translate: '-translate-x-full'
    },
    wrapper: {
      tw: {
        pointerEvents: 'pointer-events-none',
      }
    }
  }
  let screen = {
    height: undefined,
    width: undefined
  }

  // props ( dynamic )
  $: navItems = componentList.map((text) => {
    return { href: `/docs/components/${text.toLowerCase().replace(/\s/g, '-')}`, text };
  });
  $: pageTitle = generatePageTitle($page.path);
  $: if ( nav.show ) {
    nav.tw = {
      translate: 'translate-x-0'
    }
    nav.overlay.tw = {
      opacity: 'opacity-[.3]',
      pointerEvents: 'pointer-events-auto'
    }
    nav.wrapper.tw = {
        pointerEvents: 'pointer-events-auto',
    }
  } else {
    nav.tw = {
      translate: '-translate-x-full'
    }
    nav.overlay.tw = {
      opacity: 'opacity-0',
      pointerEvents: 'pointer-events-none',
    }
    nav.wrapper.tw = {
        pointerEvents: 'pointer-events-none',
    }
  }

  // lifecycle
  onMount(async () => {
    // await new Promise(res => setTimeout(res, 200));
    loaded = true;
  })
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<FlexColumn tw={{height: 'h-screen'}}>
  <Header>
    <Container>
      <FlexRow>
        <div class="font-bold uppercase text-lg lg:text-xl">
          Svelte TailwindCSS UI
        </div>
      </FlexRow>
    </Container>
  </Header>
  <Container tw={{flexGrow:'flex-grow'}}>
    <div class="flex lg:space-x-[1rem]">
      <div class="flex-grow">
        <slot/>
      </div>
    </div>
  </Container>
</FlexColumn>
<NavWrapper tw={nav.wrapper.tw}>
  <Nav tw={nav.tw}>
    <NavCategory>
      <NavCategoryTitle>Components</NavCategoryTitle>
      {#each navItems as { href, text }}
        <NavItem current={ $page.path === href} {href}>{text}</NavItem>
      {/each}
    </NavCategory>
  </Nav>
  <NavOverlay on:click={nav.toggle()} tw={nav.overlay.tw} />
</NavWrapper>
<Button on:click={nav.toggle()} tw={nav.button.tw}><Icon src={Icons.Menu}/></Button>
<div class="backdrop-filter backdrop-blur-lg fixed z-50 top-0 left-0 w-screen h-screen bg-white bg-opacity-[1] flex items-center justify-center transition duration-200 {loaded?'pointer-events-none opacity-0':'pointer-events-all opacity-1'}">
  <Spinner />
</div>