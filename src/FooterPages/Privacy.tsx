import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-2 py-8 sm:px-8 sm:py-4 mt-4 sm:mt-14">
      <div className="flex flex-col gap-6">
        {/* Main Heading */}
        <h1 className="text-stone-500 dark:text-zinc-300 text-center sm:text-3xl font-semibold">
          PRIVACY & COOKIE POLICY
        </h1>

        {/* Introduction Section */}
        <h2 className="text-lg dark:text-zinc-300 text-black font-semibold">Introduction</h2>
        <ul className="list-decimal list-inside pl-7">
          <li className="dark:text-zinc-400">
            We are committed to safeguarding the privacy of our website visitors and service users.
          </li>
          <li className="pt-2 dark:text-zinc-400">
            This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users. In other words, where we determine the purposes and means of the processing of that personal data.
          </li>
          <li className="pt-2 dark:text-zinc-400">
            We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of our website and services, we will ask you to consent to our use of cookies when you first visit our website.
          </li>
          <li className="pt-2 dark:text-zinc-400">
            In this policy, “we”, “us” and “our” refer to Enershas Technologies Private Limited. For more information about us, see Section 15.
          </li>
        </ul>

        {/* How We Use Your Personal Data Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">How We Use Your Personal Data</h2>
        <p className="pl-7 dark:text-zinc-400">
          In this Section 2, we have set out:
        </p>
        <ul className="list-inside pl-11">
          <li className="dark:text-zinc-400">
            (a) The general categories of personal data that we may process;
          </li>
          <li className="pt-2 dark:text-zinc-400">
            (b) In the case of personal data that we did not obtain directly from you, the source and specific categories of that data;
          </li>
          <li className="pt-2 dark:text-zinc-400">
            (c) The purposes for which we may process personal data; and
          </li>
          <li className="pt-2 dark:text-zinc-400">
            (d) The legal bases of the processing.
          </li>
        </ul>

        {/* Cookies and Tracking Technologies Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Cookies and Tracking Technologies</h2>
        <p className="pl-7 dark:text-zinc-400">
          We use cookies and similar technologies to enhance the user experience on our site. Cookies are small text files placed on your device to store data. You can adjust your cookie settings at any time through your browser settings. Some cookies are necessary for the functioning of the website, while others help us improve our services. By continuing to use our website, you consent to the use of cookies as described in this policy.
        </p>

        {/* Your Rights Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Your Rights</h2>
        <ul className="list-decimal list-inside pl-7 dark:text-zinc-400">
          <li>You have the right to access, correct, or request the deletion of your personal data.</li>
          <li>You have the right to restrict or object to the processing of your personal data.</li>
          <li>You can opt-out of marketing communications by following the unsubscribe instructions in our emails.</li>
          <li>If you believe your data has been mishandled, you have the right to file a complaint with a data protection authority.</li>
        </ul>

        {/* Data Security Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Data Security</h2>
        <p className="pl-7 dark:text-zinc-400">
          We take the security of your personal data seriously. We have implemented appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        {/* Data Retention Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Data Retention</h2>
        <p className="pl-7 dark:text-zinc-400">
          We will retain your personal data only for as long as is necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Once your data is no longer needed, we will securely delete or anonymize it.
        </p>

        {/* Third-Party Disclosures Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Third-Party Disclosures</h2>
        <p className="pl-7 dark:text-zinc-400">
          We may share your personal data with third-party service providers that assist us in operating our website and providing our services. These third parties are contractually obligated to keep your data confidential and secure. We do not sell your personal data to third parties.
        </p>

        {/* International Transfers Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">International Transfers</h2>
        <p className="pl-7 dark:text-zinc-400">
          Your personal data may be transferred to countries outside of your country of residence. If you are located in the European Economic Area (EEA), your data may be transferred to countries that do not have data protection laws equivalent to those in the EEA. In such cases, we ensure that your data is protected through the use of standard contractual clauses or other safeguards as required by applicable data protection laws.
        </p>

        {/* Children's Privacy Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Children's Privacy</h2>
        <p className="pl-7 dark:text-zinc-400">
          Our services are not intended for children under the age of 13, and we do not knowingly collect or process personal data from children. If you believe we have inadvertently collected personal data from a child, please contact us, and we will take steps to delete such information.
        </p>

        {/* Changes to This Privacy Policy Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Changes to This Privacy Policy</h2>
        <p className="pl-7 dark:text-zinc-400">
          We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page and revising the “last updated” date at the top of the policy. We encourage you to review this privacy policy periodically to stay informed about how we are protecting your data.
        </p>

        {/* Contact Information Section */}
        <h2 className="pt-10 text-lg dark:text-zinc-300 text-black font-semibold">Contact Us</h2>
        <p className="pl-7 dark:text-zinc-400">
          If you have any questions about this privacy policy or how we handle your personal data, please contact us.
        </p>
      </div>
      <Divider  className='pt-7'/>
      <div className="flex flex-col items-center justify-between gap-4 p-4 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/about">
            <Typography className="text-gray-600 dark:text-gray-300">About</Typography>
          </Link>
          <Link to="/services">
            <Typography className="text-gray-600 dark:text-gray-300">Services</Typography>
          </Link>
          <Link to="/careers">
            <Typography className="text-gray-600 dark:text-gray-300">Careers</Typography>
          </Link>
          <Link to="/privacy">
            <Typography className="text-gray-600 dark:text-gray-300">Privacy</Typography>
          </Link>
          
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Typography className="text-gray-600 dark:text-gray-300">
            <Link to="">Help</Link>
          </Typography>
          <div className="border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]">
            <Typography className="text-gray-600 dark:text-gray-300">Support</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
