$ErrorActionPreference = 'Stop'

$sourcePath = Join-Path $PSScriptRoot 'source'
$outputPath = Join-Path $PSScriptRoot 'out'
$packagePath = Join-Path $outputPath 'BAT4Blender'
$archivePath = Join-Path $outputPath 'BAT4Blender.zip'

if (-not (Test-Path -LiteralPath $sourcePath -PathType Container)) {
    throw "Source directory not found: $sourcePath"
}

New-Item -Path $outputPath -ItemType Directory -Force | Out-Null
Get-ChildItem -LiteralPath $outputPath -Force | Remove-Item -Recurse -Force
New-Item -Path $packagePath -ItemType Directory | Out-Null
Get-ChildItem -LiteralPath $sourcePath -Force | Copy-Item -Destination $packagePath -Recurse -Force
Compress-Archive -Path $packagePath -DestinationPath $archivePath -Force
