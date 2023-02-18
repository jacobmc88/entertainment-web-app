using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace entertainment_app.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ThumbnailSizingData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Small = table.Column<string>(type: "TEXT", nullable: true),
                    Medium = table.Column<string>(type: "TEXT", nullable: true),
                    Large = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThumbnailSizingData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Thumbnail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RegularId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Thumbnail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Thumbnail_ThumbnailSizingData_RegularId",
                        column: x => x.RegularId,
                        principalTable: "ThumbnailSizingData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Shows",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Category = table.Column<string>(type: "TEXT", nullable: true),
                    Rating = table.Column<string>(type: "TEXT", nullable: true),
                    Year = table.Column<int>(type: "INTEGER", nullable: false),
                    IsBookmarked = table.Column<bool>(type: "INTEGER", nullable: false),
                    IsTrending = table.Column<bool>(type: "INTEGER", nullable: false),
                    ThumbnailId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Shows_Thumbnail_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "Thumbnail",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Shows_ThumbnailId",
                table: "Shows",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_Thumbnail_RegularId",
                table: "Thumbnail",
                column: "RegularId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shows");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Thumbnail");

            migrationBuilder.DropTable(
                name: "ThumbnailSizingData");
        }
    }
}
