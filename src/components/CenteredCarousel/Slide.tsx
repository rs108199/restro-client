interface SlideProps {
    data: any[];
    dataIndex: number;
    isCenterSlide?: boolean;
}

const Slide = ({
    data,
    dataIndex,
    isCenterSlide,
}: SlideProps) => {
    if (
        dataIndex === undefined ||
        dataIndex < 0 ||
        dataIndex >= data.length
    ) {
        return null;
    }
    const item = data[dataIndex];

    return (
        <div
            style={{
                padding: 10,
                transform: isCenterSlide ? "scale(1.05)" : "scale(0.9)",
                transition: "transform 0.3s",
            }}
            
        >
            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    borderRadius: 12,
                }}
            />
            {/* <h3 style={{ textAlign: "center" }}>{item.title}</h3> */}
        </div>
    );
};

export default Slide;
