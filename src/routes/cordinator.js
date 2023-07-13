export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToProfilePage = (navigate) => {
    navigate('/profilepage')
}

export const goToProductDetails = (navigate, id) => {
    navigate(`/product/${id}`)
}