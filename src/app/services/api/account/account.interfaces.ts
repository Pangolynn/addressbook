export interface ResultSignInDecodedInterface {
	name: string;
	confirmed: boolean;
	aud: string[];
	iat: number;
	iss: string;
	jti: number;
	nbf: number;
}