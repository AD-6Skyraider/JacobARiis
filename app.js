// Axios Async/Await Function(s) for shelter API

const showCase = document.querySelector('#showcase');

getShelter = async () => {
    try {
        const shelter = await axios.get(`https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=PROVIDER,ADDRESS,CITY,STATE,TYPE,SUBTYPE,STATUS,NUMBER_OF_BEDS,ON_SITE_MEDICAL_CLINIC,AGES_SERVED,HOW_TO_ACCESS,LGBTQ_FOCUSED,NAME,ZIPCODE,WEB_URL&outSR=4326&f=json`);
        console.log(`Request successful`);
        console.log(shelter.data);
    } catch (err) {
        console.log(`Failure in requiring request`);
        console.log(err);
    }
}
getShelter();