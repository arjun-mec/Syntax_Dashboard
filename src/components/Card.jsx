import React, { useState } from "react";
import "../components/Card.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import LinksButton from "./LinksButton";

const Card = ({
  state,
  setState,
  district,
  setDistrict,
  year,
  setYear,
  handleSubmit,
}) => {
  const [errors, setErrors] = useState({
    state: false,
    district: false,
    year: false,
  });

  const handleValidation = () => {
    if (state && district && year) {
      setErrors({ state: false, district: false, year: false });
      return true;
    } else {
      setErrors({
        state: !state,
        district: !district,
        year: !year,
      });
      return false;
    }
  };

  const handleSubmitClick = () => {
    if (handleValidation()) {
      handleSubmit();
    }
  };
  return (
    <>
      <h1 className="card-heading">Predict PGI-D Scores for Your District</h1>
      <div className="card-actions">
        <Autocomplete
          value={state}
          onChange={(event, newState) => {
            setState(newState);
            setDistrict(null);
            setErrors({ ...errors, state: false });
          }}
          disablePortal
          required
          id="stateOptions"
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={Object.keys(allOptions)}
          sx={{ width: "90%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="State"
              error={errors.state}
              helperText={errors.state ? "Please select a state" : ""}
            />
          )}
        />
        <Autocomplete
          value={district}
          onChange={(event, newDistrict) => {
            setDistrict(newDistrict);
            setErrors({ ...errors, district: false });
          }}
          disablePortal
          required
          id="districtOptions"
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={state ? allOptions[state] : []}
          sx={{ width: "90%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="District"
              error={errors.district}
              helperText={errors.district ? "Please select a district" : ""}
            />
          )}
        />

        <Autocomplete
          value={year}
          onChange={(event, newYear) => {
            setYear(newYear);
            setErrors({ ...errors, year: false });
          }}
          disablePortal
          required
          id="yearOptions"
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={["2024", "2025", "2026", "2027"]}
          sx={{ width: "90%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Year"
              error={errors.year}
              helperText={errors.year ? "Please select a year" : ""}
            />
          )}
        />
        <Button variant="contained" onClick={handleSubmitClick} size="large">
          Predict !
        </Button>
        <LinksButton />
      </div>
    </>
  );
};

export default Card;

const allOptions = {
  "Andaman and Nicobar Islands": [
    "Middle and North Andamans",
    "Andamans",
    "Nicobars",
  ],
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Guntur",
    "Vizianagaram",
    "Chittoor",
    "East Godavari",
    "Krishna",
    "Kadapa",
    "Srikakulam",
    "Nellore",
    "West Godavari",
    "Anantapur",
    "Prakasam",
    "Kurnool",
  ],
  "Arunachal Pradesh": [
    "Lower Subansiri",
    "Lower Dibang Valley",
    "East Siang",
    "Tawang",
    "Kamle",
    "Lohit",
    "Capital Complex Itanagar",
    "KRA Dadi",
    "West Siang",
    "Anjaw",
    "Tirap",
    "Papum Pare",
    "Dibang Valley",
    "Upper Siang",
    "Namsai",
    "East Kameng",
    "Changlang",
    "Lower Siang",
    "Longding",
    "West Kameng",
    "Siang",
    "Kurung Kumey",
    "Upper Subansiri",
  ],
  Assam: [
    "Majuli",
    "Kamrup- Metro",
    "Jorhat",
    "Sibsagar",
    "Kamrup- Rural",
    "Goalpara",
    "Charaideo",
    "Udalguri",
    "Dibrugarh",
    "Nalbari",
    "Tinsukia",
    "Morigaon",
    "Darrang",
    "Sonitpur",
    "Dhemaji",
    "Biswanath",
    "Barpeta",
    "Hojai",
    "Karimganj",
    "Dima Hasao",
    "Hailakandi",
    "Golaghat",
    "West Karbi Anglong",
    "Baksa",
    "Bongaigaon",
    "Nagaon",
    "Dhubri",
    "Kokrajhar",
    "Lakhimpur",
    "Cachar",
    "Karbi Anglong",
    "Chirang",
    "South Salmara- Mankachar",
  ],
  Bihar: [
    "Nalanda",
    "Jehanabad",
    "Kaimur (Bhabua)",
    "Kishanganj",
    "Saharsa",
    "Madhubani",
    "Nawada",
    "Patna",
    "Bhojpur",
    "Munger",
    "Arwal",
    "Sheikhpura",
    "Muzaffarpur",
    "Sitamarhi",
    "Buxar",
    "Darbhanga",
    "Aurangabad (Bihar)",
    "Siwan",
    "Begusarai",
    "Lakhisarai",
    "Vaishali",
    "Purba Champaran",
    "Purnia",
    "Jamui",
    "Bhagalpur",
    "Pashchim Champaran",
    "Samastipur",
    "Katihar",
    "Saran",
    "Gopalganj",
    "Khagaria",
    "Madhepura",
    "Rohtas",
    "Gaya",
    "Sheohar",
    "Banka",
    "Araria",
    "Supaul",
  ],
  Chandigarh: ["Chandigarh"],
  Chhattisgarh: [
    "Mahasamund",
    "Durg",
    "Surajpur",
    "Dhamtari",
    "Raipur",
    "Surguja",
    "Raigarh",
    "Balodabazar",
    "Gariaband",
    "Balod",
    "Korba",
    "Dantewada",
    "Janjgir - Champa",
    "Bemetara",
    "Bilaspur",
    "Kanker",
    "Rajnandgaon",
    "Baster",
    "Bijapur",
    "Koriya",
    "Mungeli",
    "Jashpur",
    "Kondagaon",
    "Balrampur Cg",
    "Narayanpur",
    "Kawardha",
    "Sukma",
  ],
  Goa: ["North Goa", "South Goa"],
  Gujarat: [
    "Valsad",
    "Junagadh",
    "Sabar Kantha",
    "Vadodara",
    "Anand",
    "Botad",
    "Aravalli",
    "Navsari",
    "Mahesana",
    "Jamnagar",
    "Bharuch",
    "Kheda",
    "Devbhoomi Dwarka",
    "Mahisagar",
    "Narmada",
    "Panch Mahals",
    "Dohad",
    "Ahmedabad",
    "Kachchh",
    "Chhotaudepur",
    "Surat",
    "Surendranagar",
    "Tapi",
    "The Dangs",
    "Gir Somnath",
    "Bhavnagar",
    "Rajkot",
    "Amreli",
    "Patan",
    "Morbi",
    "Porbandar",
    "Banas Kantha",
    "Gandhinagar",
  ],
  Haryana: [
    "Jind",
    "Gurugram",
    "Yamunanagar",
    "Rohtak",
    "Rewari",
    "Hisar",
    "Faridabad",
    "Kurukshetra",
    "Sonipat",
    "Jhajjar",
    "Fatehabad",
    "Kaithal",
    "Bhiwani",
    "Panchkula",
    "Karnal",
    "Mahendragarh",
    "Panipat",
    "Charkhi Dadri",
    "Ambala",
    "Nuh",
    "Palwal",
    "Sirsa",
  ],
  "Himachal Pradesh": [
    "Bilaspur (H.P.)",
    "Chamba",
    "Mandi",
    "Shimla",
    "Kullu",
    "Kangra",
    "Kinnaur",
    "Hamirpur (H.P.)",
    "Solan",
    "Sirmaur",
    "Una",
    "Lahul & Spiti",
  ],
  "Jammu and Kashmir": [
    "Srinagar",
    "Kulgam",
    "Shopian",
    "Pulwama",
    "Anantnag",
    "Rajauri",
    "Jammu",
    "Ganderbal",
    "Badgam",
    "Bandipora",
    "Kupwara",
    "Baramula",
    "Punch",
    "Doda",
    "Samba",
    "Kathua",
    "Kishtwar",
    "Udhampur",
    "Ramban",
    "Reasi",
  ],
  Jharkhand: [
    "Saraikela- Kharsawan",
    "Garhwa",
    "Giridih",
    "Hazaribag",
    "Purbi Singhbhum",
    "Pakaur",
    "Ranchi",
    "Palamu",
    "Chatra",
    "Ramgarh",
    "Dhanbad",
    "Deoghar",
    "Latehar",
    "Bokaro",
    "Lohardaga",
    "Simdega",
    "Pashchimi Singhbhum",
    "Jamtara",
    "Kodarma",
    "Gumla",
    "Khunti",
    "Sahibganj",
    "Godda",
    "Dumka",
  ],
  Karnataka: [
    "Belagavi Chikkodi",
    "Hassan",
    "Dakshina Kannada",
    "Udupi",
    "Chikkamangaluru",
    "Mandya",
    "Uttara Kannada Sirsi",
    "Bengaluru U South",
    "Bagalkot",
    "Koppal",
    "Chitradurga",
    "Tumakuru",
    "Vijayapura",
    "Kolar",
    "Bengaluru Rural",
    "Uttara Kannada",
    "Dharwad",
    "Bengaluru U North",
    "Gadag",
    "Shivamogga",
    "Ballari",
    "Davanagere",
    "Kodagu",
    "Kalburgi",
    "Bidar",
    "Belagavi",
    "Mysuru",
    "Haveri",
    "Chikkaballapura",
    "Chamarajanagara",
    "Ramanagara",
    "Raichur",
    "Tumakuru Madhugiri",
    "Yadagiri",
  ],
  Kerala: [
    "Thrissur",
    "Thiruvananthapuram",
    "Ernakulam",
    "Kottayam",
    "Kollam",
    "Kannur",
    "Malappuram",
    "Pathanamthitta",
    "Alappuzha",
    "Idukki",
    "Kozhikode",
    "Palakkad",
    "Kasaragod",
    "Wayanad",
  ],
  Ladakh: ["Leh (Ladakh)", "Kargil"],
  Lakshadweep: ["Lakshadweep"],
  "Madhya Pradesh": [
    "Bhind",
    "Raisen",
    "Damoh",
    "Panna",
    "Sagar",
    "Narsimhapur",
    "Chhatarpur",
    "Bhopal",
    "Sidhi",
    "Chhindwara",
    "Sheopur",
    "Indore",
    "Dhar",
    "Betul",
    "Shahdol",
    "Gwalior",
    "Katni",
    "Vidisha",
    "Balaghat",
    "Tikamgarh",
    "Dewas",
    "Rajgarh",
    "Morena",
    "Seoni",
    "Rewa",
    "Jabalpur",
    "Datia",
    "Dindori",
    "Satna",
    "Ujjain",
    "Hoshangabad",
    "Sehore",
    "Mandla",
    "Singrauli",
    "Shivpuri",
    "Neemuch",
    "Shajapur",
    "Khargone",
    "Mandsaur",
    "Guna",
    "Khandwa",
    "Burhanpur",
    "Ashoknagar",
    "Agar Malwa",
    "Harda",
    "Ratlam",
    "Umaria",
    "Anuppur",
    "Barwani",
    "Alirajpur",
    "Jhabua",
  ],
  Maharashtra: [
    "Satara",
    "Mumbai II",
    "Kolhapur",
    "Nashik",
    "Solapur",
    "Mumbai (Suburban)",
    "Aurangabad (Maharashtra)",
    "Ratnagiri",
    "Sangli",
    "Sindhudurg",
    "Jalgaon",
    "Bid",
    "Pune",
    "Ahmadnagar",
    "Thane",
    "Nandurbar",
    "Raigarh (Maharashtra)",
    "Nanded",
    "Washim",
    "Amravati",
    "Palghar",
    "Osmanabad",
    "Chandrapur",
    "Gondiya",
    "Dhule",
    "Parbhani",
    "Wardha",
    "Akola",
    "Bhandara",
    "Jalna",
    "Latur",
    "Yavatmal",
    "Hingoli",
    "Buldana",
    "Nagpur",
    "Gadchiroli",
  ],
  Manipur: [
    "Imphal West",
    "Kakching",
    "Imphal East",
    "Churachandpur",
    "Senapati",
    "Jiribam",
    "Thoubal",
    "Bishnupur",
    "Kangpokpi",
    "Kamjong",
    "Tamenglong",
    "Ukhrul",
    "Chandel",
    "Noney",
    "Tengnoupal",
    "Pherzawl",
  ],
  Meghalaya: [
    "East Khasi Hills",
    "West Khasi Hills",
    "West Jaintia Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "Ri Bhoi",
    "East Garo Hills",
    "East Jaintia Hills",
    "West Garo Hills",
    "South Garo Hills",
    "North Garo Hills",
  ],
  Mizoram: [
    "Saiha",
    "Serchhip",
    "Kolasib",
    "Lunglei",
    "Champhai",
    "Mamit",
    "Aizawl",
    "Lawngtlai",
  ],
  Nagaland: [
    "Kohima",
    "Mokokchung",
    "Dimapur",
    "Peren",
    "Wokha",
    "Kiphire",
    "Phek",
    "Zunheboto",
    "Longleng",
    "Tuensang",
    "Mon",
  ],
  Odisha: [
    "Khurdha",
    "Cuttack",
    "Nuapada",
    "Nayagarh",
    "Bhadrak",
    "Jagatsinghpur",
    "Jajpur",
    "Sundergarh",
    "Sambalpur",
    "Angul",
    "Puri",
    "Balasore",
    "Baragarh",
    "Jharsuguda",
    "Dhenkanal",
    "Kendrapara",
    "Ganjam",
    "Kalahandi",
    "Malkangiri",
    "Bolangir",
    "Sonepur",
    "Keonjhar",
    "Koraput",
    "Deogarh",
    "Gajapati",
    "Kandhamal",
    "Nabarangpur",
    "Boudh",
    "Rayagada",
    "Mayurbhanj",
  ],
  Puducherry: ["Pondicherry", "Mahe", "Yanam", "Karaikal"],
  Punjab: [
    "Barnala",
    "Firozpur",
    "Muktsar",
    "Taran Taran",
    "Bathinda",
    "Gurdaspur",
    "Moga",
    "Amritsar",
    "Mansa",
    "Patiala",
    "Nawanshahr",
    "Fatehgarh Sahib",
    "Sangrur",
    "Pathankot",
    "Faridkot",
    "Kapurthala",
    "Fazilka",
    "Mohali",
    "Ludhiana",
    "Jalandhar",
    "Hoshiarpur",
    "Rupnagar",
  ],
  Rajasthan: [
    "Dhaulpur",
    "Jaipur",
    "Alwar",
    "Bundi",
    "Ganganagar",
    "Jhunjhunu",
    "Pratapgarh (Raj.)",
    "Ajmer",
    "Chittaurgarh",
    "Rajsamand",
    "Tonk",
    "Barmer",
    "Jodhpur",
    "Sikar",
    "Nagaur",
    "Bikaner",
    "Dausa",
    "Pali",
    "Hanumangarh",
    "Karauli",
    "Sirohi",
    "Jalor",
    "Sawai Madhopur",
    "Bhilwara",
    "Dungarpur",
    "Kota",
    "Jaisalmer",
    "Jhalawar",
    "Baran",
    "Banswara",
    "Churu",
    "Udaipur",
    "Bharatpur",
  ],
  Telangana: [
    "Medchal",
    "Siddipet",
    "Nalgonda",
    "Nizamabad",
    "Mahabubabad",
    "Wanaparthy",
    "Karimnagar",
    "Sangareddy",
    "Rangareddy",
    "Mancherial",
    "Jayashankar",
    "Mahabubnagar",
    "Vikarabad",
    "Jagtial",
    "Kamareddy",
    "Mulugu",
    "Jangaon",
    "Khammam",
    "Hyderabad",
    "Medak",
    "Nirmal",
    "Narayanapet",
    "Nagarkurnool",
    "Suryapet",
    "Peddapalli",
    "Adilabad",
  ],
  Tripura: [
    "Sepahijala",
    "Khowai",
    "South Tripura",
    "West Tripura",
    "Dhalai",
    "North Tripura",
    "Unakoti",
    "Gomati",
  ],
  "Uttar Pradesh": [
    "Gautam Buddha Nagar",
    "Mathura",
    "Varanasi",
    "Deoria",
    "Gorakhpur",
    "Farrukhabad",
    "Shrawasti",
    "Mahoba",
    "Bulandshahr",
    "Jhansi",
    "Amethi - CSM Nagar",
    "Shamli (Prabudh Nagar)",
    "Ghaziabad",
    "Sambhal (Bhim Nagar)",
    "Firozabad",
    "Bareilly",
    "Meerut",
    "Lucknow",
    "Basti",
    "Sant Kabir Nagar",
    "Mirzapur",
    "Ballia",
    "Kanpur Dehat",
    "Gonda",
    "Saharanpur",
    "Kheri",
    "Hapur (Panchsheel Nagar)",
    "Jyotiba Phule Nagar (Amroha)",
    "Kushinagar",
    "Pratapgarh",
    "Hathras",
    "Sultanpur",
    "Ghazipur",
    "Bijnor",
    "Azamgarh",
    "Auraiya",
    "Etawah",
    "Sonbhadra",
    "Barabanki",
    "Kannauj",
    "Maharajganj",
    "Moradabad",
    "Siddharthnagar",
    "Faizabad",
    "Rampur",
    "Bhadoi",
    "Mau",
    "Baghpat",
    "Bahraich",
    "Etah",
    "Hardoi",
    "Ambedkar Nagar",
    "Jaunpur",
    "Kaushambi",
    "Shahjahanpur",
    "Kanshiram Nagar",
    "Kanpur Nagar",
    "Muzaffarnagar",
    "Jalaun",
    "Unnao",
    "Agra",
    "Fatehpur",
    "Chandauli",
    "Hamirpur (U.P.)",
    "Lalitpur",
    "Balrampur Up",
    "Chitrakoot",
    "Budaun",
    "Sitapur",
    "Pilibhit",
    "Mainpuri",
    "Rae Bareli",
    "Banda",
    "Aligarh",
  ],
  Uttarakhand: [
    "Dehradun",
    "Hardwar",
    "Champawat",
    "Bageshwar",
    "Pauri",
    "Udham Singh Nagar",
    "Nainital",
    "Rudraprayag",
    "Pithoragarh",
    "Almora",
    "Uttarkashi",
    "Tehri Garhwal",
    "Chamoli",
  ],
  "West Bengal": [
    "Kolkata",
    "Hooghly",
    "Purba Bardhaman",
    "Murshidabad",
    "Jhargram",
    "Paschim Bardhaman",
    "Nadia",
    "Maldah",
    "Bankura",
    "Dakshin Dinajpur",
    "Paschim Medinipur",
    "Purba Medinipur",
    "Howrah",
    "Puruliya",
    "Jalpaiguri",
    "Alipurduar",
    "Birbhum",
    "Siliguri",
    "Kalimpong",
    "Uttar Dinajpur",
    "Darjiling",
  ],
};
