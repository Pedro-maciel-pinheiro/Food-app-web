


type SectionHeadersProps = {
    subText: string;
    mainText: string;
};

const SectionText: React.FC<SectionHeadersProps> = ({ subText, mainText }) => {
    return (
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4 text-center">
                {subText}
            </h3>
            <h2 className="text-orange-500 font-bold text-4xl italic text-center ">
                {mainText}
            </h2>
        </>
    );
};

export default SectionText;
