import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Akhtar Ansari";
  }, []);

  return (
    <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="py-4  px-4 mx-auto max-w-screen-md">
        <form
          action="https://formspree.io/f/xeqwboge"
          method="POST"
          className="space-y-8"
        >
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              for="input-group-1"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@youremail.com"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 justify-center items-center mysvg">
        <a
          href="tel:+91-9560726104"
          class="flex flex-col items-center justify-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z" />
          </svg>
          <h5 className="text-8 font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            Mobile{" "}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            +91-9560726104{" "}
          </p>
        </a>
        <a
          href="mailto:akhtaransari.info@gmail.com"
          class="flex flex-col items-center justify-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            id="mail"
          >
            <g>
              <path
                fill="none"
                d="M290 360.2c-9.1 9.6-21.7 15.1-34.9 15.1h-.6c-13.5-.2-26-6-35-16L42 187.7v265c0 11.6 6 18.3 9.5 18.3h411c3.5 0 9.5-6.6 9.5-18.3V193.6L290 360.2z"
              ></path>
              <path
                fill="none"
                d="m248.4 331.7.6.7c2.1 2.5 4.8 2.9 6.1 2.9 1.4 0 4-.3 6.2-2.7l.6-.7.7-.6L446 163.6l-189.2.3-183.7-1.2 175.3 169z"
              ></path>
              <path
                fill="#010002"
                d="m462.2 123.5-205.3.5-205.3-1h-.1C23.9 123 2 148.9 2 181.3v271.4C2 485.1 23.9 511 51.5 511h411c27.6 0 49.5-25.9 49.5-58.3V181.3c0-32.4-21.7-57.8-49.8-57.8zm-16.1 40L262.7 331.2l-.7.6-.6.7c-2.2 2.4-4.8 2.7-6.2 2.7-1.4 0-4-.4-6.1-2.9l-.6-.7L73.2 162.7l183.7 1.2 189.2-.4zM462.5 471h-411c-3.5 0-9.5-6.6-9.5-18.3v-265l177.6 171.6c9 10 21.7 15.8 35.2 16h.6c13.3 0 25.7-5.5 34.8-15.1l182-166.6v259.1c-.2 11.7-6.2 18.3-9.7 18.3z"
              ></path>
            </g>
          </svg>
          <h5 className="text-8 font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            Email{" "}
          </h5>
          <a
            href="mailto:akhtaransari.info@gmail.com"
            className="font-normal text-gray-700 dark:text-gray-400"
          >
            {" "}
            akhtaransari.info@gmail.com{" "}
          </a>
        </a>
        <a
          href="http://github.com/akhtaransari"
          class="flex flex-col items-center justify-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 100 100"
            id="linkedin"
          >
            <path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
          </svg>
          <h5 className="text-8 font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            Linkedin{" "}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Visit Profile
          </p>
        </a>
        <a
          href="http://www.linkedin.com/in/akhtarprofile/"
          class="flex flex-col items-center justify-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            id="github"
          >
            <rect width="48" height="48" fill="#000" rx="24"></rect>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h5 className="text-8 font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            Github{" "}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Visit Profile{" "}
          </p>
        </a>
      </div>
    </div>
  );
}
