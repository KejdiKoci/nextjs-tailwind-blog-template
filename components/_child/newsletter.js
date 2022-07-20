export default function () {
    return(
        <section className="bg-gray-50 mt-20">
    <div className="container mx-auto md:px-2- py-16 text-center">
        <h1 className="font-bold text-3xl">Subcribe to Newsletter</h1>
        <div className="py-4">
                    <input type="text" className="shadow border bg-white border-gray-300 rounded w-9/12 py-3 px-3
                    text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter Your Email" />
                </div>
                <button className="bg-orange-600 px-20 py-3 rounded-full text-gray-50 text-xl">
                    Subscribe
                </button>
    </div>
        </section>
    )
}