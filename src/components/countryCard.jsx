const CountryCard=({common,png})=>{
    return (
        <>
        <div className='countryCard'>
            <img src={png} alt=""  height={100} width={100}/>
            <span>{common}</span>
        </div>
        </>
    )
}
export default CountryCard