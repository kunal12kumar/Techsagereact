
const VerificationEmail = ({ username, otp }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
      <h1>Welcome, {username}!</h1>
      <p>Your OTP for verification is:</p>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{otp}</p>
      <p>Thank you for using our service.</p>
  </div>
);

export default VerificationEmail;
