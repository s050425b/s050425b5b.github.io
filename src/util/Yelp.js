const apiKey="3NnJrVb3JcxPRAPNkaOtoKr2xoyA7M6imELHMPjxFuypLlxBEiURT2LJNYkymri_EN7mesUuM7OwpgHRKz-eWHtxONvXdP_Sw-5Ey7l9hHM6dDlzh0g_tDSrFuRFX3Yx";
export const Yelp={
    searchYelp(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers:{
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response=>{
            return response.json()
            .then(jsonResponse=>{
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map(business=>{
                        return (
                        {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                        )
                    });
                }
            });
        });
    }
};





export default Yelp;
