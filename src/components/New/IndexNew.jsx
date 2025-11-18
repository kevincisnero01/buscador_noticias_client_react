import ItemNew from './ItemNew';

const  IndexNew = ({news}) => {
return ( 
<>
    <div className="max-w-7xl mx-auto my-8 px-2">
        
        {news.length > 0 && (
            <div className="flex justify-center text-2xl md:text-3xl font-bold">
                Publicaciones Relacionadas
            </div>
        )}

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        
            {news.map(item => (
                <ItemNew
                    key={item.article_id}
                    item={item}
                />
            ))}

        </ul>
    </div>
</>
);
}

export default IndexNew;