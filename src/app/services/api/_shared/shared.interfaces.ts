export interface ResponseInterface {
	result: ResultInterface;
	success: boolean;
}

export interface ResultInterface {
	data: any;
	code: number;
}
