import crypto from 'crypto';

export function verifySignature(
  payload: string,
  signature: string,
  pubKeyPem: string
): boolean {
  const verify = crypto.createVerify('SHA256');
  verify.update(payload);
  return verify.verify(pubKeyPem, signature, 'base64');
}
