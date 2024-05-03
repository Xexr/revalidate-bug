export const getData = async () => {
  // pause for 100ms
  await new Promise((resolve) => setTimeout(resolve, 500));

  // a random number between 0 & 9
  const rand = Math.floor(Math.random() * 10);

  // a list of 10 simpson quotes
  const quotes = [
    'D’oh!',
    'Eat my shorts!',
    'Don’t have a cow',
    'Cowabunga!',
    'I’m Bart Simpson, who the hell are you?',
    'I didn’t do it',
    '¡Ay, caramba!',
    'I’m in danger!',
    'Don’t lay a finger on my Butterfinger',
    'I’m a lean, mean, speed thingy',
  ];

  return quotes[rand];
};
