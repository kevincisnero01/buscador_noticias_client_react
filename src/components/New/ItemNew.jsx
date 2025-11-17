const ItemNew = ({item}) => {
    //extraer datos
    const { author, title, description, url,urlToImage, publishedAt,content, source } = item;

    // URL de una imagen de respaldo por si la noticia no tiene una.
    const imagePlaceholder = 'https://placehold.co/400x200.png?text=Noticia+sin+imagen';

    // Formatear la fecha para que sea más legible
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return ( 
    <>
    <li className="relative bg-white flex flex-col border rounded shadow-md hover:shadow-indigo-400">
        <a className="relative" href={url} target="_blank">
            <img 
                className="rounded relative w-full object-cover aspect-video"
                src={urlToImage || imagePlaceholder} 
                alt={title}
            />
            <span className="absolute top-2 left-2 bg-indigo-600 bg-opacity-80 text-white px-2 py-1 rounded-md text-xs font-semibold">{ source.name }</span>
        </a>

        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
            <a 
                href={url} 
                target="_blank" title={ title }
                className="flex justify-center items-center text-xl font-semibold text-indigo-700 hover:text-indigo-800 two-lines text-ellipsis"
            >
                <span className="line-clamp-3">{ title }</span>
            </a>

            <p className="text-gray-600 two-lines">
                { description }
            </p>

            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li title="Fecha de Publicación"
                    className="flex items-center cursor-pointer gap-0.5 bg-indigo-400 text-black px-2 py-0.5 rounded-full">
                    <span>{formatDate(publishedAt)}</span>
                </li>
                
                <li title={author ? 'Autor' : 'Sin Autor'}
                    className="flex items-center cursor-pointer gap-0.5 bg-indigo-200 text-black px-2 py-0.5 rounded-full">
                    <span>{author || 'S/A'}</span>
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