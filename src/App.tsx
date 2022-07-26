import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>How many team members can I invite?</h2>
      <p>
        You can invite up to 2 additional users on the Free plan. There is no limit on team
        members for the Premium plan.
      </p>

      <h2>What is the maximum file upload size?</h2>
      <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>

      <h2>How do I reset my password?</h2>
      <p>
        Click “Forgot password” from the login page or “Change password” from your profile
        page. A reset link will be emailed to you.
      </p>

      <h2>Can I cancel my subscription?</h2>
      <p>Yes! Send us a message and we’ll process your request no questions asked.</p>

      <h2>Do you provide additional support?</h2>
      <p>
        Chat and email support is available 24/7. Phone lines are open during normal business
        hours.
      </p>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/abdullahzeidan">Abdullah Zeidan</a>.
      </div>
    </>
  );
}

export default App;
