
const apiKey = "rMzX57BLzU4mcoXCQQS2QSMDtk6M7qN56NxAi2NuZv9IS9wHiicBSnfVcUTUDvpx5-PekrMAAMwYvRZVzMtVach_Apq79S8KMYTC5wyK-kz6lsRUM5J2Dh-UYPSRX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
    { headers: {
             Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
             if (jsonResponse.businesses) {
                 return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.display_address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    }));
                 }
        });
    }
  };
/*
Client ID
OdnpWYfvOSnvJ3BzSI9ylw

API Key
rMzX57BLzU4mcoXCQQS2QSMDtk6M7qN56NxAi2NuZv9IS9wHiicBSnfVcUTUDvpx5-PekrMAAMwYvRZVzMtVach_Apq79S8KMYTC5wyK-kz6lsRUM5J2Dh-UYPSRX3Yx
*/

export default Yelp;