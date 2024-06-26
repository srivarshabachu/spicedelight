'use client';
import { useProfile } from "../UseProfile";
import { useState } from "react";

export default function UserForm({ user, onSave }) {
    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [Address, setAddress] = useState(user?.Address || '');
    const [Postalcode, setPostalcode] = useState(user?.Postalcode || '');
    const [city, setCity] = useState(user?.city || '');
    const [country, setCountry] = useState(user?.country || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const { data: loggedInUserData } = useProfile();
    function handleAddressChange(propName, value) {
        if (propName === 'phone') setPhone(value);
        if (propName === 'streetAddress') setStreetAddress(value);
        if (propName === 'postalCode') setPostalcode(value);
        if (propName === 'city') setCity(value);
        if (propName === 'country') setCountry(value);
    }

    return (
        <div className="md:flex gap-4">
            <div>
                <div className="p-2 rounded-lg relative max-w-[120px]">
                    
                </div>
            </div>
            <form className="max-w-md mx-auto" onSubmit={ev =>
                onSave(ev, {
                    name: userName, image, phone, admin,
                    Address, city, country, Postalcode,
                })
            }>
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-10 rounded-lgtext-black">
                           
                            <label>
                                <input type="file" className="hidden" />
                                <span className="center p-2 border rounded-lg cursor-pointer">Edit</span>
                            </label>
                        </div>
                    </div>

                    <div className="grow" >
                        <input type="text" placeholder="First and last name" value={userName} onChange={ev => setUserName(ev.target.value)} />
                        <input type="email" disabled={true} placeholder={user?.email} />
                        <input type="tel" placeholder="Phone number" value={phone} onChange={ev => setPhone(ev.target.value)} />
                        <input type="text" placeholder="Street address" value={Address} onChange={ev => setAddress(ev.target.value)} />
                        <div className="flex gap-2">
                            <input type="text" placeholder="City" value={city} onChange={ev => setCity(ev.target.value)} />
                            <input type="text" placeholder="Postal code" value={Postalcode} onChange={ev => setPostalcode(ev.target.value)} />
                        </div>
                        
                        <input type="text" placeholder="Country" value={country} onChange={ev => setCountry(ev.target.value)} />
                        {loggedInUserData.admin && (
                            <div>
                                <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                                    <input
                                        id="adminCb" type="checkbox" className="" value={'1'}
                                        checked={admin}
                                        onChange={ev => setAdmin(ev.target.checked)}
                                    />
                                    <span>Admin</span>
                                </label>
                            </div>
                        )}
                        <button type='submit'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}