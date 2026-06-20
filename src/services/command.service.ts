import { COMMANDS } from '../utils/commands';

export const executeCommand = (text: string) => {
  const command = text.toLowerCase();

  if (COMMANDS.whatsapp.some(c => command.includes(c))) {
    return 'Opening WhatsApp...';
  }

  if (COMMANDS.chrome.some(c => command.includes(c))) {
    return 'Opening Chrome...';
  }

  if (COMMANDS.settings.some(c => command.includes(c))) {
    return 'Opening Settings...';
  }

  if (COMMANDS.call.some(c => command.includes(c))) {
    return 'Preparing phone call...';
  }

  return 'Command not recognized.';
};
