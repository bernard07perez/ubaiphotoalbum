import ublogo from "../../assets/img/ublogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container flex items-center justify-center gap-2 py-6">
        <div className="flex text-left mx-2 items-center justify-start space-x-2">
          <img src={ublogo} className="ublogo" />
          <h3 className="text-red-900 font-semibold">University of Batangas</h3>
        </div>
        <div className="text-left mx-2">
          <h4 className="text-gray-800 text-xs">
            Hilltop Road, Brgy. Kumintang IbabaBatangas City 4200, Philippine
          </h4>
          <h4 className="text-gray-800 text-xs">
            Office Hours: Monday to Friday 8:00 am – 5:00 pm Saturday 8:00 am –
            12:00 pm
          </h4>
        </div>
      </div>
    </>
  );
}
