﻿// <auto-generated />
using System;
using DDITStudentPortal.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DDITStudentPortal.Migrations
{
    [DbContext(typeof(DDITStudentPortalContext))]
    partial class DDITStudentPortalContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DDITStudentPortal.Models.Fees", b =>
                {
                    b.Property<int>("FeesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FeesId"), 1L, 1);

                    b.Property<string>("Admissiontype")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bankbranch")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Batchyear")
                        .HasColumnType("int");

                    b.Property<string>("Chequedate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Chequenumber")
                        .HasColumnType("int");

                    b.Property<int>("Feesamount")
                        .HasColumnType("int");

                    b.Property<string>("Paiddate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Paymode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Reconsiledate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Reconsiledate2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sessionnumber")
                        .HasColumnType("int");

                    b.Property<int>("StudentId")
                        .HasColumnType("int");

                    b.Property<string>("Txndate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Txnstatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vouchernumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FeesId");

                    b.HasIndex("StudentId");

                    b.ToTable("Fees");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Result", b =>
                {
                    b.Property<int>("ResultId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ResultId"), 1L, 1);

                    b.Property<bool>("BloackAtt")
                        .HasColumnType("bit");

                    b.Property<int>("BlockMarks")
                        .HasColumnType("int");

                    b.Property<int>("Credit")
                        .HasColumnType("int");

                    b.Property<string>("ExternalAtt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FinalAtt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Finalmarks")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt1")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt1OutOf")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt2")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt2OutOf")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt3")
                        .HasColumnType("int");

                    b.Property<int>("LectureAtt3OutOf")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt1")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt1OutOf")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt2")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt2OutOf")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt3")
                        .HasColumnType("int");

                    b.Property<int>("PrAtt3OutOf")
                        .HasColumnType("int");

                    b.Property<string>("PracticalAtt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sess1Att")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sess1marks")
                        .HasColumnType("int");

                    b.Property<string>("Sess2Att")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sess2marks")
                        .HasColumnType("int");

                    b.Property<string>("Sess3Att")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sess3marks")
                        .HasColumnType("int");

                    b.Property<int?>("SessionId")
                        .HasColumnType("int");

                    b.Property<int>("SessionNo")
                        .HasColumnType("int");

                    b.Property<int>("StudentId")
                        .HasColumnType("int");

                    b.Property<int?>("SubjectId")
                        .HasColumnType("int");

                    b.Property<string>("Subjectcode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subjectname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TermworkAtt")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ResultId");

                    b.HasIndex("SessionId");

                    b.HasIndex("StudentId");

                    b.HasIndex("SubjectId");

                    b.ToTable("Result");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Session", b =>
                {
                    b.Property<int>("SessionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SessionId"), 1L, 1);

                    b.Property<string>("BatchYear")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProvisionalMarksheet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RegExamNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rem1ExamNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rem2ExamNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SessionNo")
                        .HasColumnType("int");

                    b.HasKey("SessionId");

                    b.ToTable("Session");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Student", b =>
                {
                    b.Property<int>("StudentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StudentId"), 1L, 1);

                    b.Property<string>("AcpcSeatAllotmentDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address3")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AdmissionType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AnnualIncome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("BatchYear")
                        .HasColumnType("int");

                    b.Property<string>("BirthDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BirthPlace")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bloodgroup")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CasteCategoryCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DduReportingDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Degree")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EnrollmentYear")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GuardianFullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsD2D")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaritalStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Meritrank")
                        .HasColumnType("int");

                    b.Property<string>("MiddleName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MotherTongue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NameFormat")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nationality")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Occupation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OldStudentCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrganizationName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<int?>("Pincode")
                        .HasColumnType("int");

                    b.Property<int?>("QualifyingExamRollno")
                        .HasColumnType("int");

                    b.Property<int>("ReShufflePhase")
                        .HasColumnType("int");

                    b.Property<string>("ReShuffleSatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RelationType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SessionNumber")
                        .HasColumnType("int");

                    b.Property<string>("SessionType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StudentAllotment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StudentCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubCaste")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StudentId");

                    b.ToTable("Student");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Subject", b =>
                {
                    b.Property<int>("SubjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SubjectId"), 1L, 1);

                    b.Property<string>("Alias")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Credit")
                        .HasColumnType("int");

                    b.Property<bool>("Elective")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PrMinPass1")
                        .HasColumnType("int");

                    b.Property<int>("PrMinPass2")
                        .HasColumnType("int");

                    b.Property<int>("PrTotal")
                        .HasColumnType("int");

                    b.Property<string>("Program")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RecStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SessMinPass1")
                        .HasColumnType("int");

                    b.Property<int>("SessMinPass2")
                        .HasColumnType("int");

                    b.Property<int>("SessTotal")
                        .HasColumnType("int");

                    b.Property<int>("Session")
                        .HasColumnType("int");

                    b.Property<string>("SubjectCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Syllabus")
                        .HasColumnType("int");

                    b.Property<int>("ThMinPass1")
                        .HasColumnType("int");

                    b.Property<int>("ThMinPass2")
                        .HasColumnType("int");

                    b.Property<int>("ThTotal")
                        .HasColumnType("int");

                    b.Property<int>("TotalMarks")
                        .HasColumnType("int");

                    b.Property<int>("TotalMinPass")
                        .HasColumnType("int");

                    b.Property<int>("TwMinPass1")
                        .HasColumnType("int");

                    b.Property<int>("TwMinPass2")
                        .HasColumnType("int");

                    b.Property<int>("TwTotal")
                        .HasColumnType("int");

                    b.HasKey("SubjectId");

                    b.ToTable("Subject");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Fees", b =>
                {
                    b.HasOne("DDITStudentPortal.Models.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("DDITStudentPortal.Models.Result", b =>
                {
                    b.HasOne("DDITStudentPortal.Models.Session", "Session")
                        .WithMany()
                        .HasForeignKey("SessionId");

                    b.HasOne("DDITStudentPortal.Models.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DDITStudentPortal.Models.Subject", "Subject")
                        .WithMany()
                        .HasForeignKey("SubjectId");

                    b.Navigation("Session");

                    b.Navigation("Student");

                    b.Navigation("Subject");
                });
#pragma warning restore 612, 618
        }
    }
}
