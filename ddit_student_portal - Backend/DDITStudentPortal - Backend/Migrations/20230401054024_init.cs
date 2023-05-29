using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DDITStudentPortal.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Session",
                columns: table => new
                {
                    SessionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatchYear = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SessionNo = table.Column<int>(type: "int", nullable: false),
                    RegExamNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rem1ExamNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rem2ExamNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProvisionalMarksheet = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Session", x => x.SessionId);
                });

            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DduReportingDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AdmissionType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NameFormat = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AcpcSeatAllotmentDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsD2D = table.Column<bool>(type: "bit", nullable: true),
                    EnrollmentYear = table.Column<int>(type: "int", nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QualifyingExamRollno = table.Column<int>(type: "int", nullable: true),
                    SessionType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SessionNumber = table.Column<int>(type: "int", nullable: false),
                    BatchYear = table.Column<int>(type: "int", nullable: false),
                    StudentCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldStudentCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentAllotment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Meritrank = table.Column<int>(type: "int", nullable: false),
                    ReShuffleSatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReShufflePhase = table.Column<int>(type: "int", nullable: false),
                    CasteCategoryCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubCaste = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaritalStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotherTongue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nationality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bloodgroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelationType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GuardianFullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Occupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganizationName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnnualIncome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pincode = table.Column<int>(type: "int", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<int>(type: "int", nullable: false),
                    MobileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.StudentId);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    SubjectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SubjectCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Alias = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Program = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RecStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Session = table.Column<int>(type: "int", nullable: false),
                    Elective = table.Column<bool>(type: "bit", nullable: false),
                    Credit = table.Column<int>(type: "int", nullable: false),
                    ThMinPass1 = table.Column<int>(type: "int", nullable: false),
                    ThMinPass2 = table.Column<int>(type: "int", nullable: false),
                    ThTotal = table.Column<int>(type: "int", nullable: false),
                    SessMinPass1 = table.Column<int>(type: "int", nullable: false),
                    SessMinPass2 = table.Column<int>(type: "int", nullable: false),
                    SessTotal = table.Column<int>(type: "int", nullable: false),
                    PrMinPass1 = table.Column<int>(type: "int", nullable: false),
                    PrMinPass2 = table.Column<int>(type: "int", nullable: false),
                    PrTotal = table.Column<int>(type: "int", nullable: false),
                    TwMinPass1 = table.Column<int>(type: "int", nullable: false),
                    TwMinPass2 = table.Column<int>(type: "int", nullable: false),
                    TwTotal = table.Column<int>(type: "int", nullable: false),
                    TotalMinPass = table.Column<int>(type: "int", nullable: false),
                    TotalMarks = table.Column<int>(type: "int", nullable: false),
                    Syllabus = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.SubjectId);
                });

            migrationBuilder.CreateTable(
                name: "Fees",
                columns: table => new
                {
                    FeesId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Txndate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vouchernumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Batchyear = table.Column<int>(type: "int", nullable: false),
                    Sessionnumber = table.Column<int>(type: "int", nullable: false),
                    Admissiontype = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Feesamount = table.Column<int>(type: "int", nullable: false),
                    Txnstatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Paymode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Chequenumber = table.Column<int>(type: "int", nullable: false),
                    Chequedate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bankbranch = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Paiddate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reconsiledate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Reconsiledate2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fees", x => x.FeesId);
                    table.ForeignKey(
                        name: "FK_Fees_Student_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Student",
                        principalColumn: "StudentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Result",
                columns: table => new
                {
                    ResultId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Subjectcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Subjectname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sess1Att = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sess1marks = table.Column<int>(type: "int", nullable: false),
                    LectureAtt1 = table.Column<int>(type: "int", nullable: false),
                    LectureAtt1OutOf = table.Column<int>(type: "int", nullable: false),
                    PrAtt1 = table.Column<int>(type: "int", nullable: false),
                    PrAtt1OutOf = table.Column<int>(type: "int", nullable: false),
                    Sess2Att = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sess2marks = table.Column<int>(type: "int", nullable: false),
                    LectureAtt2 = table.Column<int>(type: "int", nullable: false),
                    LectureAtt2OutOf = table.Column<int>(type: "int", nullable: false),
                    PrAtt2 = table.Column<int>(type: "int", nullable: false),
                    PrAtt2OutOf = table.Column<int>(type: "int", nullable: false),
                    Sess3Att = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sess3marks = table.Column<int>(type: "int", nullable: false),
                    ExternalAtt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PracticalAtt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TermworkAtt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FinalAtt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Finalmarks = table.Column<int>(type: "int", nullable: false),
                    LectureAtt3 = table.Column<int>(type: "int", nullable: false),
                    LectureAtt3OutOf = table.Column<int>(type: "int", nullable: false),
                    PrAtt3 = table.Column<int>(type: "int", nullable: false),
                    PrAtt3OutOf = table.Column<int>(type: "int", nullable: false),
                    BloackAtt = table.Column<bool>(type: "bit", nullable: false),
                    BlockMarks = table.Column<int>(type: "int", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    SessionId = table.Column<int>(type: "int", nullable: true),
                    SessionNo = table.Column<int>(type: "int", nullable: false),
                    SubjectId = table.Column<int>(type: "int", nullable: true),
                    Credit = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Result", x => x.ResultId);
                    table.ForeignKey(
                        name: "FK_Result_Session_SessionId",
                        column: x => x.SessionId,
                        principalTable: "Session",
                        principalColumn: "SessionId");
                    table.ForeignKey(
                        name: "FK_Result_Student_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Student",
                        principalColumn: "StudentId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Result_Subject_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subject",
                        principalColumn: "SubjectId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fees_StudentId",
                table: "Fees",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Result_SessionId",
                table: "Result",
                column: "SessionId");

            migrationBuilder.CreateIndex(
                name: "IX_Result_StudentId",
                table: "Result",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Result_SubjectId",
                table: "Result",
                column: "SubjectId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fees");

            migrationBuilder.DropTable(
                name: "Result");

            migrationBuilder.DropTable(
                name: "Session");

            migrationBuilder.DropTable(
                name: "Student");

            migrationBuilder.DropTable(
                name: "Subject");
        }
    }
}
