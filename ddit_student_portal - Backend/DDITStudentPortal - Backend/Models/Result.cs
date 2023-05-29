using System.Text.Json.Serialization;

namespace DDITStudentPortal.Models
{
    public class Result
    {
        public int ResultId { get; set; }
        public string? Subjectcode { get; set; }
        public string? Subjectname { get; set; }
        public string? Sess1Att { get; set; }
        public int Sess1marks { get; set; }
        public int LectureAtt1 { get; set; }
        public int LectureAtt1OutOf { get; set; }
        public int PrAtt1 { get; set; }
        public int PrAtt1OutOf { get; set; }
        public string? Sess2Att { get; set; }
        public int Sess2marks { get; set; }
        public int LectureAtt2 { get; set; }
        public int LectureAtt2OutOf { get; set; }
        public int PrAtt2 { get; set; }
        public int PrAtt2OutOf { get; set; }
        public string? Sess3Att { get; set; }
        public int Sess3marks { get; set; }
        public string? ExternalAtt { get; set; }
        public string? PracticalAtt { get; set; }
        public string? TermworkAtt { get; set; }
        public string? FinalAtt { get; set; }
        public int Finalmarks { get; set; }
        public int LectureAtt3 { get; set; }
        public int LectureAtt3OutOf { get; set; }
        public int PrAtt3 { get; set; }
        public int PrAtt3OutOf { get; set; }
        public bool BloackAtt { get; set; }
        public int BlockMarks { get; set; }
        [JsonIgnore]
        public Student? Student { get; set; }
        public int StudentId { get; set; }
        [JsonIgnore]
        public Session? Session { get; set; }
        public int SessionNo { get; set; }
        [JsonIgnore]
        public Subject? Subject { get; set; }
        public int Credit { get; set; }


    }
}
