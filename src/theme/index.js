export default {
  button : {
    backgroundColor: 'bg-primary-500 hover:bg-primary-600'
  },
  header:{
    backdropBlur: 'backdrop-blur-lg',
    backgroundColor: 'bg-white',
    backgroundOpacity: 'bg-opacity-[.5]',
    zIndex: 'z-10'
  },
  nav: {
    backdropBlur: 'backdrop-blur-lg',
    backgroundColor: 'bg-white',
    backgroundOpacity: 'bg-opacity-[.5]',
    duration: 'duration-200',
    flexDirection: 'flex-col',
    inset: 'top-0 left-0',
    maxHeight: 'max-h-full',
    overflow: 'overflow-y-auto',
    padding: 'py-[1rem]',
    space: 'space-y-[1rem]',
    shadow: 'shadow',
    transition: 'transition',
    transform: 'transform',
    width: 'min-w-[287px]',
    zIndex: 'z-30'
  },
  navCategory:{
    flex: 'flex',
    flexDirection: 'flex-col',
  },
  navCategoryTitle:{
    textTransform: 'uppercase',
    fontWeight: 'font-bold',
    padding: 'px-[1rem]',
  },
  navItem: {
    backgroundColor: 'bg-transparent hover:bg-primary-50'
  },
  navItemCurrent: {
    backgroundColor: 'bg-primary-500',
  },
  navOverlay: {
    zIndex:'z-20'
  },
  navWrapper: {
    inset: 'top-0 left-0',
    flex: 'flex',
    height: 'h-screen',
    overflow: 'overflow-hidden',
    position: 'fixed',
    width: 'w-screen',
    zIndex: 'z-20'
  },
  spinner: {
    textColor: 'text-primary-500'
  }
}