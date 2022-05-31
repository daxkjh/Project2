const BizCheckList =({company})=>{
    return(
        <>
        <li>{`${company?.entity_name}(UEN No. ${company?.uen})`}</li>
        </>
    )
}
export default BizCheckList