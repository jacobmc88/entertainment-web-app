﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using entertainment_app.Helpers;

#nullable disable

namespace entertainment_app.Migrations
{
    [DbContext(typeof(SqliteDataContext))]
    partial class SqliteDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.5");

            modelBuilder.Entity("entertainment_app.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("entertainment_app.Models.Show", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Category")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsBookmarked")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsTrending")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Rating")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ThumbnailId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<int>("Year")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ThumbnailId");

                    b.ToTable("Shows");
                });

            modelBuilder.Entity("entertainment_app.Models.Thumbnail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("RegularId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("RegularId");

                    b.ToTable("Thumbnail");
                });

            modelBuilder.Entity("entertainment_app.Models.ThumbnailSizingData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Large")
                        .HasColumnType("TEXT");

                    b.Property<string>("Medium")
                        .HasColumnType("TEXT");

                    b.Property<string>("Small")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ThumbnailSizingData");
                });

            modelBuilder.Entity("entertainment_app.Models.Show", b =>
                {
                    b.HasOne("entertainment_app.Models.Thumbnail", "Thumbnail")
                        .WithMany()
                        .HasForeignKey("ThumbnailId");

                    b.Navigation("Thumbnail");
                });

            modelBuilder.Entity("entertainment_app.Models.Thumbnail", b =>
                {
                    b.HasOne("entertainment_app.Models.ThumbnailSizingData", "Regular")
                        .WithMany()
                        .HasForeignKey("RegularId");

                    b.Navigation("Regular");
                });
#pragma warning restore 612, 618
        }
    }
}
