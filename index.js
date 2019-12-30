module.exports = async function App(context) {
  console.log('yyyyyy');
  console.log(context);
  await context.sendText('Hello World');
};
