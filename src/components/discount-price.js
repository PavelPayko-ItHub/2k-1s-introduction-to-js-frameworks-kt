
export const getDiscontPrice = (element) => {
    return element.discont_price == null ? element.price : element.discont_price;
};

export const Discount = ({element}) => {
    const discont_price = getDiscontPrice(element);
    if (discont_price !== element.price) {
        const discountpr = parseInt(100 - (discont_price / element.price * 100), 10);
        const discountstr = `-${discountpr}%`
        return (<span className="discount">{discountstr}</span>);
    }
    return (<></>);
};

export const Price = ({element}) => {
    const discont_price = getDiscontPrice(element);
    if (discont_price === element.price) {
        return (<span className="item__price"><b>{`$${element.price}`}</b></span>);
    }
    return (<span className="item__price"><b>{`$${discont_price}`}</b><s>{`$${element.price}`}</s></span>);
};
