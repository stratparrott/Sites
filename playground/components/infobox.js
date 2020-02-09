export default { title: 'InfoBox' };

export const Download = () => '<div role="info" class="docs-info"><div class="info-box"><i class="info fas fa-file-download"></i></div> <div class="info-text"><h2>Information Download Box</h2> <p>Get more information about the thing you clicked on with this info download box</p> </div>';

export const Alert = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};