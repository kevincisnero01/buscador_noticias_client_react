const ItemNew = ({item}) => {
    //extraer datos
    const { author, title, description, url,urlToImage, publishedAt,content, source } = item;

    return ( 
    <>
    <li className="relative bg-white flex flex-col border rounded shadow-md hover:shadow-teal-400">
        <a className="relative" href="/tool/writey-ai">
            <img 
                className="rounded relative w-full object-cover aspect-video"
                src="https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="#" loading="#"
            />
        </a>

        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a href="/tool/writey-ai"
                className="flex justify-center items-center text-xl font-semibold text-indigo-700 hover:text-indigo-800 two-lines text-ellipsis">
                { title }
            </a>

            <p className="text-gray-600 two-lines">
                { description }
            </p>

            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li title="Pricing type"
                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                    $
                    <span>Freemium</span>
                </li>

            </ul>

            {/* <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                    <span>Content Generation,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                    <span>Writing</span>
                </li>
            </ul> */}
        </div>
    </li>
    </>
    );
}

export default ItemNew;