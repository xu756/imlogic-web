import { useMount } from 'ahooks';

export default ({ chatId }: { chatId: string }) => {
    useMount(() => {
        console.log(chatId);
    });
    return (
        <div className="w-full">
            <div className="flex justify-start mb-4">
                <div className="flex-none h-8 w-8">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>
                <div className=" max-w-lg ml-2 py-3 px-4 bg-white rounded-br-3xl rounded-tr-2xl rounded-tl-xl">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                    </p>
                </div>
            </div>
            <div className="flex justify-start mb-4">
                <div className="flex-none h-8 w-8">
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>
                <div className="justify-end max-w-lg ml-2  py-3 px-4 bg-white rounded-br-3xl rounded-tr-2xl rounded-tl-xl">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat at praesentium, aut ullam delectus odio error
                        sit rem. Architecto nulla doloribus laborum illo rem
                        enim dolor odio saepe, consequatur quas?
                    </p>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex justify-end mb-4">
                    <div className="justify-start max-w-lg mr-2 py-3 px-4 bg-indigo-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl">
                        <p className="text-white">
                            Hi Alice! I'm good, just finished a great book. How
                            about you?
                        </p>
                    </div>
                    <img
                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                        className="object-cover h-8 w-8 rounded-full"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
