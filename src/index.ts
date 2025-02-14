(async () => {
  const FooClass = (await import('./FooClass'))?.default;
  console.log(new FooClass());
})();
