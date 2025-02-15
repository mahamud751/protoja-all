

const Info = ({tittle, description, bgColor, textColor}) => {
    return (
        <div className={`${bgColor} text-white py-16 px-6 md:px-10`}>
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
            <div className="col-span-6">
                <h2 className={`text-3xl md:text-4xl font-semibold ${textColor}`}>{tittle}</h2>
    
                <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                {description}
                </p>
            </div>
        </div>
    </div>
    );
};

export default Info;