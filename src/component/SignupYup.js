import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupYup = () => {
    document.title = 'Validations using Yup and useFormik';

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            email: '',
            password: '',
            cnfpassword: '',
            gender: '',
            hobbies: '',
            country: '',
            state: '',
            district: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            address: Yup.string()
                .max(100, 'Must be 100 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 Chatecters or less')
                .required('Required'),
            cnfpassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            gender: Yup.string()
                .required('Required'),
            hobbies: Yup.array().min(1, 'At least one option must be selected.').of(Yup.string().required()).required(),
            country: Yup.string()
                .required('Required'),
            state: Yup.string()
                .required('Required'),
            district: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <section className="">
                    <div className="">
                        <div
                            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            <div
                                className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="name"
                                        className=""
                                    >Name
                                    </label>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                        id="name"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        placeholder="Name" />
                                    {formik.touched.name && formik.errors.name ? <div className="text-red-900 font-bold text-sm">{formik.errors.name}</div> : null}
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="address"
                                        className=""
                                    >Address
                                    </label>
                                    <textarea
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                        id="address"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                        placeholder="Home address" />
                                    {formik.touched.address && formik.errors.address ? <div className="text-red-900 font-bold text-sm">{formik.errors.address}</div> : null}
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label htmlFor="email">Email address
                                    </label>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                        id="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder="Email address" />
                                    {formik.touched.email && formik.errors.email ? <div className="text-red-900 font-bold text-sm">{formik.errors.email}</div> : null}
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="password"
                                        className=""
                                    >Password
                                    </label>
                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                        id="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Password" />
                                    {formik.touched.password && formik.errors.password ? <div className="text-red-900 font-bold text-sm">{formik.errors.password}</div> : null}
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="cnfpassword"
                                        className=""
                                    >Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                        id="cnfpassword"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cnfpassword}
                                        placeholder="Confirm Password" />
                                    {formik.touched.cnfpassword && formik.errors.cnfpassword ? <div className="text-red-900 font-bold text-sm">{formik.errors.cnfpassword}</div> : null}
                                </div>
                            </div>


                            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label>Gender</label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4">
                                            <input type="radio" value="male" id="male" onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="female" onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input id="others" type="radio" value="others" onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="others" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
                                        </div>
                                    </div>
                                    {formik.touched.gender && formik.errors.gender ? <div className="text-red-900 font-bold text-sm">{formik.errors.gender}</div> : null}



                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label>Hobbies</label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4">
                                            <input type="checkbox"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value='cricket'
                                                id='cricket'
                                                name='hobbies'
                                            />
                                            <label htmlFor="cricket" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cricket</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                type="checkbox"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value='football'
                                                id='football'
                                                name='hobbies'
                                            />
                                            <label htmlFor="football" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Football</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input type="checkbox"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value='chess'
                                                id='chess'
                                                name='hobbies'
                                            />
                                            <label htmlFor="chess" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chess</label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input type="checkbox"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value='wwe'
                                                name='hobbies'
                                                id='wwe'
                                            />
                                            <label htmlFor="wwe" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">WWE</label>
                                        </div>
                                    </div>
                                    {formik.touched.hobbies && formik.errors.hobbies ? <div className="text-red-900 font-bold text-sm">{formik.errors.hobbies}</div> : null}
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="state"
                                        className=""
                                    >Country
                                    </label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4"></div>
                                        <select id="country" name="country" className="inline-block rounded bg-blue-700 bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] w-48"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.country}
                                        >
                                            <option className="bg-white text-black" value="option1">Option 1</option>
                                            <option className="bg-white text-black" value="option2">Option 2</option>
                                            <option className="bg-white text-black" value="option3">Option 3</option>
                                        </select>


                                    </div>
                                    {formik.touched.country && formik.errors.country ? <div className="text-red-900 font-bold text-sm">{formik.errors.country}</div> : null}
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="state"
                                        className=""
                                    >State
                                    </label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4"></div>
                                        <select id="state" name="state" className="inline-block rounded bg-blue-700 bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] w-48"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.state}
                                        >
                                            <option className="bg-white text-black" value="option1">Option 1</option>
                                            <option className="bg-white text-black" value="option2">Option 2</option>
                                            <option className="bg-white text-black" value="option3">Option 3</option>
                                        </select>


                                    </div>
                                    {formik.touched.state && formik.errors.state ? <div className="text-red-900 font-bold text-sm">{formik.errors.state}</div> : null}
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <label
                                        htmlFor="district"
                                        className=""
                                    >District
                                    </label>
                                    <div className="flex">
                                        <div className="flex items-center mr-4"></div>
                                        <select name='district' id='district' className="inline-block rounded bg-blue-700 bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.district}
                                        >
                                            <option className="bg-white text-black" value="option1">Option 1</option>
                                            <option className="bg-white text-black" value="option2">Option 2</option>
                                            <option className="bg-white text-black" value="option3">Option 3</option>
                                        </select>


                                    </div>
                                    {formik.touched.district && formik.errors.district ? <div className="text-red-900 font-bold text-sm">{formik.errors.district}</div> : null}
                                </div>


                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block rounded bg-blue-700 bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Register
                                    </button>

                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Already have an account? &nbsp;
                                        <a
                                            href="#!"
                                            className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        >Login</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className=" my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p
                                className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                Or
                            </p>
                        </div>
                        <div
                            className="items-center justify-center lg:justify-start text-center">
                            <p className="mb-0 mr-4 text-lg">Sign Up with</p>
                            <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">


                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </button>


                            <button
                                type="button"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default SignupYup