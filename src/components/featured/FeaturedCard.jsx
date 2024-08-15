
// eslint-disable-next-line react/prop-types
const FeaturedCard = ({ title, image }) => {
    return (
        <div className="bg-white pt-6 pb-4 flex justify-center shadow-md rounded-2xl">
            <div className="text-center space-y-2">
                <div className="flex justify-center">
                    <div className="w-[48px] h-[48px]">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                </div>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default FeaturedCard;