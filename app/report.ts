export class Report {
    constructor(
        public $id: number,
        public $type: string,
        public Id: number,

        public AutoLoad: boolean,
        public CanEditNorm: boolean,

        public Code: string,
        public CreatedAt: any,
        public CreatedById: any,
        public CreatedByName: string,
        public Description: string,
        public DisplayTemplate: string,
        public ModifiedAt: Date,
        public ModifiedById: string,
        public ModifiedByName: string,
        public Name: string,
        public ReportGroupId: string,

        public ReportPages: any,
        public Source: string,
        public SourceType: string,
        public UserReportSettings: any,
        public Visible: boolean
    ) { }
}
