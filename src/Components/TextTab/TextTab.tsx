type TextTab = {
    title: string;
    styles: any;
}

const TextTab = ({ title , styles }: TextTab) => {
    return (
        <div>
            <h2 style={{ ...styles , padding: 10 , borderRadius: 6 , color: 'white' , marginLeft: 5, marginRight: 5 }} className="text-sm" >{title}</h2>
        </div>
    );
};

export default TextTab;