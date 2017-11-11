export class Jersey {
	constructor(
		public image: string = '';
		public player: string = '';
		public team: string = '';
		public description: string = '';
		public quantity: number = 1;
		public price: string = '';
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}
