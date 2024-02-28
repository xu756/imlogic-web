import { useMount } from 'ahooks';

import Button from './button';
import Message from './message';
export const ChatWith = ({ chatId }: { chatId: string }) => {
  useMount(() => {
    console.log(chatId);
  });
  return (
    <div className="max-w-full flex flex-col h-full">
      <div className="flex-auto overflow-auto scroll-smooth p-3">
        <Message chatId={chatId} />
      </div>
      <div className="border-t border-gray-300 ">
        <Button />
      </div>
    </div>
  );
};
