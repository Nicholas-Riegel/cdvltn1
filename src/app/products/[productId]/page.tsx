export default async function Product({params}: {params: {productId: string}}) {

    const {productId} = await params;
    
    return <p>Product: {productId}</p>
}