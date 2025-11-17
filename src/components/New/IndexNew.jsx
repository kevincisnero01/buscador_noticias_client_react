import ItemNew from './ItemNew';

const  IndexNew = ({news}) => {
return ( 
<>
    <h1>Listado de Noticias</h1>
    <div>
        {news.map(item => (
            <ItemNew />
        ))}
    </div>
</>
);
}

export default IndexNew;